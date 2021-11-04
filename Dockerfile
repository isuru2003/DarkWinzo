FROM fusuf/whatsWinzo:latest

RUN git clone https://github.com/isuru2003/DarkWinzoWhatsappBot /root/DarkWinzoWhatsappBot
WORKDIR /root/QueenSewWhatsappBot/
ENV TZ=Asia/Colombo
RUN npm install supervisor -g
RUN yarn install --no-audit

CMD ["node", "sew.js"]
