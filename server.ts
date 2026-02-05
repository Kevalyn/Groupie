import http from "http";
import next from "next";
import { Server } from "socket.io";
import { prisma } from "./src/lib/prisma";

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

const port = Number(process.env.PORT) || 3000;

app.prepare().then(() => {
  const server = http.createServer((req, res) => {
    handle(req, res);
  });

  const io = new Server(server, {
    path: "/socket.io"
  });

  io.on("connection", (socket) => {
    socket.on("join-group", async (groupId: string) => {
      socket.join(groupId);
    });

    socket.on("chat-message", async (payload) => {
      try {
        const { groupId, userId, body } = payload ?? {};
        if (!groupId || !userId || !body) return;

        const membership = await prisma.groupMember.findUnique({
          where: { userId_groupId: { userId, groupId } }
        });

        if (!membership) return;

        const message = await prisma.chatMessage.create({
          data: {
            groupId,
            userId,
            body: String(body).slice(0, 500)
          },
          include: { user: true }
        });

        io.to(groupId).emit("chat-message", {
          id: message.id,
          body: message.body,
          createdAt: message.createdAt,
          user: {
            id: message.user.id,
            displayName: message.user.displayName ?? "Anonymous",
            avatarUrl: message.user.avatarUrl
          }
        });
      } catch (error) {
        console.error("socket chat error", error);
      }
    });
  });

  server.listen(port, () => {
    console.log(`Groupie running on http://localhost:${port}`);
  });
});
