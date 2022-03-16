import fs from 'fs';

export default async function api(req, res) {
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.write(await fs.readFileSync('./public/storybook-static/index.html', 'utf-8'));
  res.end();
}
