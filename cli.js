#!/usr/bin/env node
// Original source: https://raw.githubusercontent.com/jxnblk/mdx-deck/master/packages/mdx-deck/cli.js
const path = require('path')
const meow = require('meow')
const execa = require('execa')
const chalk = require('chalk')
const fs = require('fs-extra')
const pkg = require('./package.json')

const log = (...args) => {
  console.log(chalk.green('[zoetic]'), ...args)
}
log.error = (...args) => {
  console.log(chalk.red('[err]'), ...args)
}

const cli = meow(
  `
  ${chalk.gray('Usage')}

    $ ${chalk.green('zoetic deck.mdx')}

    $ ${chalk.green('zoetic build deck.mdx')}

  ${chalk.gray('Options')}

      -h --host     Dev server host
      -p --port     Dev server port
      --no-open     Prevent from opening in default browser

`,
  {
    description: chalk.green('@zoetic/zoetic ') + chalk.gray(pkg.description),
    flags: {
      port: {
        type: 'string',
        alias: 'p',
        default: '8000',
      },
      host: {
        type: 'string',
        alias: 'h',
        default: 'localhost',
      },
      open: {
        type: 'boolean',
        alias: 'o',
        default: true,
      },
    },
  }
)

const [cmd, file] = cli.input
const filename = file || cmd

if (!filename) cli.showHelp(0)

process.env.__SRC__ = path.resolve(filename)

const opts = Object.assign({}, cli.flags)

const gatsby = async (...args) => {
  await execa('gatsby', ['clean'], {
    cwd: __dirname,
    stdio: 'inherit',
    preferLocal: true,
  })
  return execa('gatsby', args.filter(Boolean), {
    cwd: __dirname,
    stdio: 'inherit',
    preferLocal: true,
  })
}

switch (cmd) {
  case 'build':
    gatsby('build').then(() => {
      const public_ = path.join(__dirname, 'public')
      const dist = path.join(process.cwd(), 'public')
      if (public_ === dist) return
      fs.copySync(public_, dist)
    })
    break
  case 'dev':
  default:
    gatsby(
      'develop',
      '--host',
      opts.host,
      '--port',
      opts.port,
      opts.open && '--open'
    )
    break
}
