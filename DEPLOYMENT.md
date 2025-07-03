# ReactionBay Deployment Guide

## 🚀 Live Sites
- **English**: https://reactionbay.com
- **German**: https://reactionbay.de (DNS issues with GoDaddy)

## 📋 Server Information
- **Provider**: Hetzner
- **IP**: 95.217.131.27
- **SSH**: `ssh root@95.217.131.27`
- **Domain**: reactionbay.com, reactionbay.de

## 🔧 Deployment Process

### 1. Local Development
```bash
cd reactionbay
npm install
npm run dev
# Access at http://localhost:3000
```

### 2. Deploy to Server
```bash
# 1. Commit and push changes to GitHub
git add .
git commit -m "Your commit message"
git push origin main

# 2. SSH to server and pull latest changes
ssh root@95.217.131.27
cd /root/Reactionbay
git pull origin main

# 3. Install dependencies and build
npm install
npm run build

# 4. Restart the application
pkill -f "npm start"
npm start
```

### 3. Nginx Configuration
- **Config file**: `/etc/nginx/sites-available/reactionbay`
- **SSL certificates**: `/etc/letsencrypt/live/`
- **Reload Nginx**: `systemctl reload nginx`

## 🔄 Rollback Process

### If something goes wrong:
```bash
# 1. SSH to server
ssh root@95.217.131.27

# 2. Go to previous working commit
cd /root/Reactionbay
git log --oneline -5  # See recent commits
git checkout <previous-commit-hash>

# 3. Rebuild and restart
npm install
npm run build
pkill -f "npm start"
npm start
```

## 📁 Important Files
- **Main app**: `/root/Reactionbay/`
- **Nginx config**: `/etc/nginx/sites-available/reactionbay`
- **SSL certs**: `/etc/letsencrypt/live/reactionbay.com/` and `/etc/letsencrypt/live/reactionbay.de/`

## 🛠️ Troubleshooting

### App not running:
```bash
ssh root@95.217.131.27
ps aux | grep node
cd /root/Reactionbay && npm start
```

### Nginx issues:
```bash
ssh root@95.217.131.27
nginx -t
systemctl status nginx
systemctl reload nginx
```

### SSL certificate renewal:
```bash
ssh root@95.217.131.27
certbot renew
systemctl reload nginx
```

## 📝 Version History
- **Current**: Original "ReactionBay" version
- **Last deployment**: [Date]
- **Status**: ✅ Working on reactionbay.com, ⚠️ DNS issues on reactionbay.de

## 🔐 Security
- SSL certificates auto-renew with Certbot
- Nginx configured with security headers
- Server firewall enabled
- Regular security updates recommended 