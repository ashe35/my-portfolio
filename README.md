# Portfolio Website - Ashetu Desta

A modern, responsive portfolio website showcasing my work as a Full Stack Developer and Cryptography Researcher.

## 🚀 Features

- **Responsive Design** - Works seamlessly on all devices
- **Modern UI** - Clean, attractive interface with smooth animations
- **Contact Form** - Integrated with Web3Forms for easy communication
- **Performance Optimized** - Fast loading and smooth interactions
- **Accessibility Compliant** - ARIA labels and semantic HTML

## 🛠️ Built With

- **React 19.2.0** - UI library
- **Vite** - Build tool and dev server
- **CSS3** - Custom styling with gradients and animations
- **Web3Forms** - Contact form integration

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/ashe35/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory:
```env
VITE_WEB3FORMS_ACCESS_KEY=your_access_key_here
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:5173](http://localhost:5173) in your browser

## 🏗️ Build for Production

```bash
npm run build
```

The build files will be in the `dist` folder.

## 📂 Project Structure

```
portfolio/
├── public/           # Static assets
├── src/
│   ├── assets/      # Images, icons, SVGs
│   ├── components/  # React components
│   │   ├── About/
│   │   ├── Contact/
│   │   ├── Footer/
│   │   ├── Hero/
│   │   ├── MyWork/
│   │   ├── Navbar/
│   │   └── Services/
│   ├── App.jsx      # Main app component
│   ├── main.jsx     # Entry point
│   └── index.css    # Global styles
├── .env             # Environment variables (not in git)
└── package.json     # Dependencies
```

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and sign in with GitHub
3. Click "Import Project" and select your repository
4. Add environment variable: `VITE_WEB3FORMS_ACCESS_KEY`
5. Click "Deploy"

Your site will be live at `https://your-project.vercel.app`

### Deploy to Netlify

1. Build the project: `npm run build`
2. Go to [netlify.com](https://netlify.com)
3. Drag and drop the `dist` folder
4. Add environment variables in Site Settings

## 📧 Contact

- **Email**: ashetudesta2023@gmail.com
- **Phone**: +251 935564337
- **Location**: Haramaya University, Harar
- **GitHub**: [github.com/ashe35](https://github.com/ashe35)
- **LinkedIn**: [linkedin.com/in/ashetu-desta](https://www.linkedin.com/in/ashetu-desta-9501a9379)

## 📄 License

© 2025 Ashetu Desta - All rights reserved.

## 🙏 Acknowledgments

- Icons from Font Awesome
- Fonts from Google Fonts (Outfit)
- Form handling by Web3Forms
