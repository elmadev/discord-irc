module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps : [
    {
      name      : 'discord-irc',
      script    : 'discord-irc.sh',
      cwd       : 'discord-irc/',
      args      : '--log-date-format "YYYY-MM-DD HH:mm Z" -e ~/logs/discord-irc-err.log -o ~/logs/discord-irc-out.log -l ~/logs/discord-irc.log'
    }
  ]
}
