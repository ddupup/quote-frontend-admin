FROM node:18-alpine3.15 as build

WORKDIR /frontend-app
COPY package.json yarn.lock ./
RUN yarn --registry=https://registry.npm.taobao.org
COPY . .
RUN npm run build

FROM node:18-alpine3.15
COPY --from=build /frontend-app/.next /usr/share/nginx/html/quote
WORKDIR /usr/local/nginx
COPY nginx.conf /etc/nginx/conf.d
ENTRYPOINT ["nginx"]
CMD ["-g","daemon off;"]