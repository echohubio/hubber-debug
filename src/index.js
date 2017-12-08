import log from 'electron-log';

const execute = (payload) => {
  const { command } = payload;

  switch (command) {
    case 'ping':
      return { msg: 'pong' };
    default:
      log.error('Unknown command');
      return { error: 'unknown_command' };
  }
};

const setup = (options, imports, register) => {
  register(null, {
    debug: {
      execute,
    },
  });

  log.debug('hubber-debug: setup complete');
};

export default setup;
