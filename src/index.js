import log from 'electron-log';

const ping = () => {
  log.debug('ping');

  return { msg: 'pong' };
};

const setup = (options, imports, register) => {
  register(null, {
    debug: {
      ping,
    },
  });

  log.debug('hubber-debug: setup complete');
};

export default setup;
