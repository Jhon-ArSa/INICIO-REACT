import { Link } from 'react-router-dom';
import './ejercicio1.css';

// 1. Top Section
const TopSection = () => <section className="header">&lt;section&gt;</section>;

// 2. Navigation
const Navigation = () => <nav className="nav">&lt;nav&gt;&lt;/nav&gt;</nav>;

// 3. Article Item
const ArticleItem = () => <article className="article">&lt;article&gt;&lt;/article&gt;</article>;

// 4. Sidebar (Aside)
const Sidebar = () => <aside className="aside">&lt;aside&gt;&lt;/aside&gt;</aside>;

// 5. Main Area (Section containing articles and aside)
const MainArea = () => (
    <section className="main-section">
        <div className="articles-container">
            <div className="tag-label">&lt;section&gt;</div>
            <ArticleItem />
            <ArticleItem />
            <div className="tag-label">&lt;/section&gt;</div>
        </div>
        <Sidebar />
    </section>
);

// 6. Footer Section
const FooterSection = () => <footer className="footer">&lt;footer&gt;&lt;/footer&gt;</footer>;

// 7. App Component
const Ejercicio1 = () => (
    <div className="ejercicio-container">
        <div className="back-link">
            <Link to="/">&larr; Volver al Inicio</Link>
        </div>
        <div className="app-container">
            <TopSection />
            <Navigation />
            <MainArea />
            <FooterSection />
        </div>
    </div>
);

export default Ejercicio1;
