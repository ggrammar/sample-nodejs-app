FROM node:lts-alpine3.17
# https://nodejs.dev/en/about/releases/
# I want to use an LTS (long-term support) version of Node.js, so that I'll have
# support for a long time. V18 will hit end-of-life in April 2025, and V20 will 
# become the active LTS in October 2023, so I'll have about a year and a half to
# upgrade. 

ADD app.js /home/node/

# https://stackoverflow.com/questions/34441975/sigterm-does-not-reach-node-script-when-docker-runs-it-with-bin-sh-c
# 
ENTRYPOINT ["node", "/home/node/app.js"]
