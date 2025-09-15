# Tech With Diwana — Static Website Demo

This repository contains a beginner-friendly static website demo you can host on Ubuntu/WSL using **nginx**.

---

## 🏗 Architecture
Static website architecture diagram (Browser → NGINX → Serve static files):

![Architecture](assets/static_architecture_highres.png)

---

## 🖥 First Page Preview
Homepage of **Tech With Diwana** static site (hero image):

![Homepage](assets/hero.png)

---

## 🚀 Quick setup (WSL / Ubuntu) — no Docker

1. Copy project to web root:
```bash
sudo mkdir -p /var/www/techwithdiwana
sudo cp -r * /var/www/techwithdiwana/
sudo chown -R $USER:$USER /var/www/techwithdiwana
```

2. Install nginx:
```bash
sudo apt update
sudo apt install -y nginx
```

3. Create nginx site config `/etc/nginx/sites-available/techwithdiwana`:
```nginx
server {
  listen 80;
  server_name _;

  root /var/www/techwithdiwana;
  index index.html;

  location / {
    try_files $uri $uri/ =404;
  }

  location ~* \.(png|jpg|jpeg|svg|css|js)$ {
    expires 7d;
    add_header Cache-Control "public";
  }
}
```

4. Enable site & reload nginx:
```bash
sudo ln -sf /etc/nginx/sites-available/techwithdiwana /etc/nginx/sites-enabled/techwithdiwana
sudo nginx -t
sudo systemctl restart nginx
```

5. Open browser: `http://localhost`

---

## 📂 Files to push to git
```bash
git init
git add .
git commit -m "Initial commit — static site for Tech With Diwana"
git remote add origin <your-repo-url>
git push -u origin main
```

---

## ℹ️ Note
This project is created for **learning and demo purposes**.
