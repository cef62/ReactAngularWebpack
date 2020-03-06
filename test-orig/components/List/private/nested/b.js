import * as shell from 'shelljs'
import * as path from 'path'

shell.echo('Prepare to add imports')

const root = process.cwd()
const entry = path.join(root, 'test')

shell.echo(`Target folder: ${entry}`)
shell.cd(entry)

const files = shell.ls()
files.forEach(f => shell.echo(`- ${f}`))
