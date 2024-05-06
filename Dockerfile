FROM node:21.6.1 as build

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install

COPY . ./

RUN yarn build

FROM nginx:alpine

# COPY --from=build /app/build /usr/share/nginx/html
# RUN rm /etc/nginx/conf.d/default.conf
RUN rm -rf /etc/nginx/sites-enabled/default

COPY nginx/nginx.conf /etc/nginx/conf.d 

RUN echo ls -a

COPY --from=build /app/dist dist/

EXPOSE 3000

CMD ["nginx", "-g", "daemon off;"]
