# 🌐 Tech With Diwana - Static Website

This repository contains the static website code for **Tech With Diwana**.  
The site is built using **HTML, CSS, and JS**, and can be hosted on any web server.  
Below are the steps to deploy this site on an **AWS EC2 Ubuntu server** using **Nginx**.

---

## 🏗 Architecture
Static website architecture diagram (Browser → NGINX → Serve static files):

![Architecture](assets/static_architecture_highres.png)

---

## 🖥 First Page Preview
Homepage of **Tech With Diwana** static site (hero image):

![Homepage](assets/hero.png)

---

## 🚀 Deployment on AWS EC2 (Ubuntu + Nginx)

### 1. Launch & Connect
Launch a free-tier **Ubuntu EC2 instance** and connect via SSH:
```bash
ssh -i "your-key.pem" ubuntu@<EC2-PUBLIC-IP>

2. Install Nginx

sudo apt update
sudo apt install -y nginx

3. Clone Repository

sudo mkdir -p /var/www/techwithdiwana
sudo git clone https://github.com/devopswithdiwana/techwithdiwana_static_site.git /var/www/techwithdiwana

4. Set Permissions

sudo chown -R www-data:www-data /var/www/techwithdiwana
sudo find /var/www/techwithdiwana -type d -exec chmod 755 {} \;
sudo find /var/www/techwithdiwana -type f -exec chmod 644 {} \;

5. Configure Nginx

Create /etc/nginx/sites-available/techwithdiwana:

server {
  listen 80;
  server_name <EC2-PUBLIC-IP>;

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


Enable site & disable default:

sudo ln -sf /etc/nginx/sites-available/techwithdiwana /etc/nginx/sites-enabled/
sudo rm -f /etc/nginx/sites-enabled/default

6. Test & Reload Nginx

sudo nginx -t
sudo systemctl reload nginx

7. Open in Browser

Visit:

http://<EC2-PUBLIC-IP>

📦 Project Structure

techwithdiwana_static_site/
├── assets/
├── css/
├── js/
├── index.html
└── README.md

📝 Notes

. Replace <EC2-PUBLIC-IP> with your AWS public IP or domain.
. For HTTPS, add a domain and install SSL using Let's Encrypt Certbot
. This project is for learning and demo purposes.

👨‍💻 Author

Tech With Diwana

https://www.youtube.com/@TechWithDiwana/