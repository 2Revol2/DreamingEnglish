FROM node:24.21.0-alpine as builder
WORKDIR /app

COPY package*.json ./
COPY prisma ./prisma
COPY . .
ENV NEXT_PUBLIC_API_URL=/api
RUN npm ci && \
    npm run prisma:generate && \
    npm run build


FROM node:24.21.0-alpine as runner
WORKDIR /app
ENV NODE_ENV=production
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public
USER node
EXPOSE 3000
CMD ["node", "server.js"]