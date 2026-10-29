import { useMemo, useState } from "react";

const products = [
  { id: 1, name: "Wireless Headphones", category: "Audio", price: 45, oldPrice: 59, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=700&q=85", tag: "BESTSELLER", rating: 4.8 },
  { id: 2, name: "Mechanical Keyboard", category: "Accessories", price: 68, image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=700&q=85", tag: "POPULAR", rating: 4.7 },
  { id: 3, name: "Premium Laptop", category: "Computers", price: 749, image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=700&q=85", tag: "FEATURED", rating: 4.9 },
  { id: 4, name: "Wireless Mouse", category: "Accessories", price: 29, image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=700&q=85", rating: 4.6 },
  { id: 5, name: "Studio Headphones", category: "Audio", price: 89, image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=700&q=85", rating: 4.8 },
  { id: 6, name: "Smart Watch", category: "Wearables", price: 99, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=700&q=85", rating: 4.5 },
  { id: 7, name: "USB-C Charger", category: "Accessories", price: 19, image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=700&q=85", tag: "ESSENTIAL", rating: 4.6 },
  { id: 8, name: "Portable Speaker", category: "Audio", price: 55, image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=700&q=85", rating: 4.7 },
];

const categories = [
  { name: "All products", icon: "▦" },
  { name: "Computers", icon: "▣" },
  { name: "Audio", icon: "♫" },
  { name: "Accessories", icon: "⌘" },
  { name: "Wearables", icon: "◷" },
];

const money = (amount) => `$${amount.toFixed(2)}`;

export default function App() {
  const [chatOpen, setChatOpen] = useState(false);
  const [chatMessage, setChatMessage] = useState("");
  const [chatMessages, setChatMessages] = useState([
    {
      role: "assistant",
      text: "Hi! 👋 Welcome to Lainne Market. What tech product can I help you find today?",
    },
  ]);
  const [category, setCategory] = useState("All products");
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [notice, setNotice] = useState("");

  function sendChatMessage(event) {
    event.preventDefault();
    const message = chatMessage.trim();
    if (!message) return;

    setChatMessages((current) => [
      ...current,
      { role: "user", text: message },
      {
        role: "assistant",
        text: "Thanks for your question! I'm still learning how to recommend products. Soon, I'll be able to help you find the right tech.",
      },
    ]);
    setChatMessage("");
  }

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory =
        category === "All products" || product.category === category;
      const matchesSearch = product.name
        .toLowerCase()
        .includes(search.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [category, search]);

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
  const cartTotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  function addToCart(product) {
    setCart((current) => {
      const existing = current.find((item) => item.id === product.id);
      if (existing) {
        return current.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...current, { ...product, quantity: 1 }];
    });
    setNotice(`${product.name} added to your bag`);
    window.setTimeout(() => setNotice(""), 2500);
  }

  function updateQuantity(id, change) {
    setCart((current) =>
      current
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity + change }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  }

  return (
    <div className="lm">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Manrope:wght@400;500;600;700;800&display=swap');

        .lm {
          --black: #000000;
          --white: #ffffff;
          --gray: #f5f5f5;
          --darkgray: #333333;
          --mediumgray: #666666;
          color: var(--black);
          background: var(--white);
          min-height: 100vh;
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
        }
        .lm * { box-sizing: border-box; }
        .lm button, .lm input { font: inherit; }
        .lm button { cursor: pointer; }
        .lm button:focus-visible, .lm input:focus-visible {
          outline: 2px solid var(--black); outline-offset: 2px;
        }
        .lm .wrap { max-width: 1240px; margin: auto; padding: 0 30px; }
        .lm .topline {
          background: var(--black); color: #fff; text-align: center;
          padding: 9px 16px; font-size: 12px; letter-spacing: .15px;
        }
        .lm .topline strong { color: #fff; font-weight: 700; }
        .lm .navbar {
          background: var(--white); border-bottom: 1px solid #e0e0e0;
          position: sticky; top: 0; z-index: 100;
        }
        .lm .navinner {
          min-height: 78px; display: flex; align-items: center;
          gap: 34px;
        }
        .lm .logo {
          display: flex; align-items: center; gap: 10px;
          color: var(--black); text-decoration: none; white-space: nowrap;
          font: 800 22px 'Manrope', sans-serif; letter-spacing: -1px;
        }
        .lm .logoicon {
          width: 36px; height: 36px; display: grid; place-items: center;
          color: white; background: var(--black); border-radius: 8px;
          font-size: 19px; letter-spacing: 0;
        }
        .lm .navlinks { display: flex; gap: 24px; align-items: center; }
        .lm .navlinks button {
          background: none; border: 0; color: var(--mediumgray); padding: 10px 0;
          font-weight: 600; font-size: 13px;
        }
        .lm .navlinks button:hover { color: var(--black); }
        .lm .navright { margin-left: auto; display: flex; align-items: center; gap: 12px; }
        .lm .searchbox {
          display: flex; align-items: center; gap: 9px; background: var(--gray);
          border: 1px solid #e0e0e0; border-radius: 8px;
          padding: 0 12px; height: 42px; width: 220px;
        }
        .lm .searchbox span { font-size: 19px; color: var(--mediumgray); }
        .lm .searchbox input {
          min-width: 0; width: 100%; border: 0; outline: 0;
          background: transparent; color: var(--black); font-size: 12px;
        }
        .lm .cartbtn {
          display: flex; gap: 9px; align-items: center; position: relative;
          border: 1px solid var(--black); background: var(--black); border-radius: 8px;
          height: 42px; padding: 0 14px; color: white; font-weight: 700;
        }
        .lm .cartbtn:hover { background: var(--darkgray); }
        .lm .cartbtn .carticon { font-size: 18px; }
        .lm .cartcount {
          display: inline-grid; place-items: center; min-width: 19px;
          height: 19px; border-radius: 99px; background: #fff;
          color: var(--black); font-size: 10px; padding: 0 5px; font-weight: 700;
        }
        .lm .main { padding-top: 30px; padding-bottom: 55px; }
        .lm .breadcrumb { color: var(--mediumgray); font-size: 12px; margin-bottom: 20px; }
        .lm .breadcrumb strong { color: var(--black); font-weight: 600; }
        .lm .hero {
          display: grid; grid-template-columns: 1.05fr .95fr;
          min-height: 310px; border-radius: 14px; overflow: hidden;
          background: linear-gradient(135deg, #f5f5f5 0%, #e8e8e8 100%);
          position: relative;
        }
        .lm .herotext {
          padding: 42px 30px 38px 42px; display: flex;
          flex-direction: column; align-items: flex-start; justify-content: center;
        }
        .lm .eyebrow {
          display: inline-flex; align-items: center; gap: 7px;
          color: var(--black); font-size: 11px; font-weight: 800;
          letter-spacing: 1.2px; text-transform: uppercase;
        }
        .lm .eyedot { width: 7px; height: 7px; border-radius: 50%; background: var(--black); }
        .lm .hero h1 {
          font: 800 clamp(30px, 3.5vw, 45px)/1.13 'Manrope', sans-serif;
          letter-spacing: -1.8px; margin: 17px 0 12px; max-width: 480px;
          color: var(--black);
        }
        .lm .hero h1 span { color: var(--black); }
        .lm .hero p { color: #404040; line-height: 1.7; max-width: 370px; margin: 0 0 23px; }
        .lm .primary {
          border: 0; border-radius: 8px; padding: 13px 19px;
          background: var(--black); color: white; font-weight: 700;
          box-shadow: 0 5px 14px rgba(0,0,0,0.15); transition: transform .15s, background .15s;
        }
        .lm .primary:hover { background: var(--darkgray); transform: translateY(-1px); }
        .lm .herovisual { min-height: 310px; position: relative; overflow: hidden; }
        .lm .herovisual img {
          position: absolute; width: 100%; height: 100%; inset: 0;
          object-fit: cover; object-position: center;
        }
        .lm .herovisual:after {
          content: ''; position: absolute; inset: 0;
          background: linear-gradient(90deg, #f5f5f5 0%, rgba(245,245,245,0.1) 42%);
        }
        .lm .dealbadge {
          position: absolute; z-index: 1; right: 25px; top: 24px;
          width: 78px; height: 78px; display: grid; place-content: center;
          text-align: center; border-radius: 50%; background: #fff;
          box-shadow: 0 7px 25px rgba(0,0,0,0.15); color: var(--black);
          font-weight: 800; font-size: 19px; line-height: 1.1;
        }
        .lm .dealbadge small { display: block; font-size: 9px; color: var(--mediumgray); margin-top: 4px; }
        .lm .benefits {
          display: grid; grid-template-columns: repeat(3, 1fr); gap: 15px;
          margin: 23px 0 38px;
        }
        .lm .benefit {
          display: flex; align-items: center; gap: 12px; padding: 16px;
          background: var(--white); border: 1px solid #e0e0e0; border-radius: 12px;
        }
        .lm .benefiticon {
          width: 39px; height: 39px; border-radius: 11px;
          display: grid; place-items: center; background: var(--gray);
          color: var(--black); font-size: 19px; flex-shrink: 0;
        }
        .lm .benefit strong { display: block; font-size: 12px; margin-bottom: 4px; color: var(--black); }
        .lm .benefit small { color: var(--mediumgray); font-size: 11px; }
        .lm .sectionhead {
          display: flex; justify-content: space-between; align-items: end;
          gap: 16px; margin-bottom: 19px;
        }
        .lm .sectionhead h2 {
          font: 800 23px 'Manrope', sans-serif; letter-spacing: -.7px; margin: 0;
          color: var(--black);
        }
        .lm .sectionhead p { margin: 6px 0 0; color: var(--mediumgray); font-size: 12px; }
        .lm .textbtn {
          background: none; border: 0; color: var(--black);
          font-weight: 700; padding: 8px 0; white-space: nowrap;
        }
        .lm .categories {
          display: flex; gap: 9px; overflow-x: auto; padding: 2px 1px 8px;
          margin-bottom: 21px; scrollbar-width: thin;
        }
        .lm .category {
          flex: 0 0 auto; border: 1px solid #e0e0e0; border-radius: 8px;
          background: var(--white); color: var(--mediumgray); padding: 11px 15px;
          font-weight: 600; font-size: 12px; transition: .15s;
        }
        .lm .category span { margin-right: 7px; font-size: 15px; }
        .lm .category:hover, .lm .category.active {
          color: var(--white); border-color: var(--black); background: var(--black);
        }
        .lm .productgrid {
          display: grid; grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 17px;
        }
        .lm .product {
          border: 1px solid #e0e0e0; border-radius: 13px;
          background: var(--white); overflow: hidden; transition: box-shadow .2s, transform .2s;
          min-width: 0;
        }
        .lm .product:hover { box-shadow: 0 10px 28px rgba(0,0,0,0.1); transform: translateY(-3px); }
        .lm .productimage {
          background: var(--gray); height: 195px; position: relative;
          display: grid; place-items: center; overflow: hidden; padding: 14px;
        }
        .lm .productimage img {
          width: 100%; height: 100%; object-fit: contain;
          mix-blend-mode: multiply; transition: transform .25s;
        }
        .lm .product:hover .productimage img { transform: scale(1.045); }
        .lm .tag {
          position: absolute; left: 11px; top: 11px; padding: 5px 7px;
          border-radius: 5px; background: var(--black); color: white;
          font-size: 9px; font-weight: 800; letter-spacing: .4px;
        }
        .lm .productbody { padding: 14px; }
        .lm .productcat { color: var(--mediumgray); font-size: 10px; margin-bottom: 7px; }
        .lm .productname {
          color: var(--black); font: 700 13px 'Manrope', sans-serif;
          margin: 0 0 9px; line-height: 1.4; min-height: 36px;
        }
        .lm .rating { font-size: 11px; color: #ffa500; margin-bottom: 13px; }
        .lm .rating span { color: var(--mediumgray); margin-left: 5px; }
        .lm .productbottom {
          display: flex; justify-content: space-between; align-items: center;
          gap: 8px; border-top: 1px solid #f0f0f0; padding-top: 12px;
        }
        .lm .price { font: 800 17px 'Manrope', sans-serif; white-space: nowrap; color: var(--black); }
        .lm .oldprice { font-size: 10px; color: var(--mediumgray); text-decoration: line-through; margin-top: 3px; }
        .lm .addbtn {
          width: 34px; height: 34px; flex-shrink: 0; border: 0;
          border-radius: 8px; background: var(--black); color: white;
          font-size: 22px; display: grid; place-items: center; transition: .15s;
          font-weight: 700;
        }
        .lm .addbtn:hover { background: var(--darkgray); }
        .lm .empty { grid-column: 1/-1; padding: 55px 20px; text-align: center; background: white; border-radius: 12px; color: var(--mediumgray); }
        .lm .widebanner {
          display: grid; grid-template-columns: 1fr auto; align-items: center;
          gap: 20px; padding: 27px 32px; margin-top: 42px;
          background: var(--black); border-radius: 14px; color: white;
        }
        .lm .widebanner .eyebrow { color: white; }
        .lm .widebanner h3 { font: 800 22px 'Manrope', sans-serif; margin: 9px 0 6px; }
        .lm .widebanner p { color: #d9d9d9; font-size: 12px; line-height: 1.6; margin: 0; }
        .lm .widebanner .primary { box-shadow: none; }
        .lm .footer {
          border-top: 1px solid #e0e0e0; background: var(--white);
          padding: 24px 0; color: var(--mediumgray); font-size: 11px;
        }
        .lm .footerinner { display: flex; justify-content: space-between; gap: 16px; flex-wrap: wrap; }
        .lm .footer strong { color: var(--black); }
        .lm .toast {
          position: fixed; bottom: 22px; left: 50%; transform: translateX(-50%);
          z-index: 20; padding: 13px 20px; border-radius: 8px;
          background: var(--black); color: white; box-shadow: 0 8px 30px rgba(0,0,0,0.3);
          font-weight: 600;
        }
        .lm .overlay {
          position: fixed; inset: 0; z-index: 30; background: rgba(0,0,0,0.4);
          display: flex; justify-content: flex-end;
        }
        .lm .drawer {
          background: var(--white); width: min(430px, 100%); height: 100%;
          display: flex; flex-direction: column; padding: 25px;
          box-shadow: -10px 0 40px rgba(0,0,0,0.1); overflow-y: auto;
        }
        .lm .drawerhead { display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #e0e0e0; padding-bottom: 20px; }
        .lm .drawerhead h2 { font: 800 21px 'Manrope', sans-serif; margin: 0; color: var(--black); }
        .lm .closebtn { background: var(--gray); border: 0; border-radius: 8px; width: 35px; height: 35px; font-size: 20px; color: var(--black); }
        .lm .cartitems { flex: 1; }
        .lm .cartitem { display: flex; align-items: center; gap: 13px; padding: 18px 0; border-bottom: 1px solid #e0e0e0; }
        .lm .cartitem img { width: 65px; height: 65px; object-fit: contain; background: var(--gray); border-radius: 9px; }
        .lm .cartiteminfo { flex: 1; min-width: 0; }
        .lm .cartiteminfo strong { display: block; font-size: 12px; margin-bottom: 6px; color: var(--black); }
        .lm .cartiteminfo small { color: var(--mediumgray); }
        .lm .qty { display: flex; align-items: center; gap: 10px; margin-top: 8px; }
        .lm .qty button { width: 25px; height: 25px; border: 1px solid #e0e0e0; background: white; border-radius: 6px; color: var(--black); }
        .lm .carttotal { padding-top: 20px; border-top: 1px solid #e0e0e0; }
        .lm .totalrow { display: flex; justify-content: space-between; font-weight: 800; font-size: 17px; margin-bottom: 18px; color: var(--black); }
        .lm .checkoutnote { color: var(--mediumgray); font-size: 11px; line-height: 1.6; margin-top: 12px; }
        .lm .full { width: 100%; }

        .lm .chat-launcher {
          position: fixed;
          right: 24px;
          bottom: 24px;
          z-index: 50;
          width: 60px;
          height: 60px;
          border: none;
          border-radius: 50%;
          background: var(--black);
          color: white;
          font-size: 26px;
          box-shadow: 0 6px 22px rgba(0,0,0,0.3);
        }

        .lm .chat-panel {
          position: fixed;
          right: 24px;
          bottom: 96px;
          z-index: 50;
          width: min(360px, calc(100vw - 32px));
          height: 440px;
          background: var(--white);
          border: 1px solid #e0e0e0;
          border-radius: 16px;
          box-shadow: 0 12px 40px rgba(0,0,0,0.15);
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }

        .lm .chat-header {
          background: var(--black);
          color: white;
          padding: 17px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .lm .chat-header p {
          margin: 5px 0 0;
          color: #999;
          font-size: 12px;
        }

        .lm .chat-header button {
          background: transparent;
          border: none;
          color: white;
          font-size: 24px;
        }

        .lm .chat-body {
          flex: 1;
          padding: 15px;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .lm .chat-message {
          max-width: 85%;
          padding: 11px 13px;
          border-radius: 12px;
          line-height: 1.5;
          font-size: 13px;
        }

        .lm .chat-message.assistant {
          align-self: flex-start;
          background: var(--gray);
          color: var(--black);
        }

        .lm .chat-message.user {
          align-self: flex-end;
          background: var(--black);
          color: white;
        }

        .lm .chat-input {
          display: flex;
          gap: 8px;
          padding: 12px;
          border-top: 1px solid #e0e0e0;
        }

        .lm .chat-input input {
          flex: 1;
          min-width: 0;
          border: 1px solid #e0e0e0;
          border-radius: 9px;
          padding: 11px;
        }

        .lm .chat-input button {
          border: none;
          border-radius: 9px;
          padding: 0 13px;
          background: var(--black);
          color: white;
          font-weight: 700;
        }

        .lm .chat-input button:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        @media (max-width: 1000px) {
          .lm .wrap { padding: 0 22px; }
          .lm .navinner { gap: 20px; }
          .lm .navlinks { gap: 14px; }
          .lm .searchbox { width: 180px; }
          .lm .productgrid { grid-template-columns: repeat(3, minmax(0, 1fr)); }
          .lm .productimage { height: 180px; }
        }
        @media (max-width: 720px) {
          .lm .wrap { padding: 0 16px; }
          .lm .navinner { min-height: 68px; flex-wrap: wrap; gap: 12px; padding-top: 12px; padding-bottom: 12px; }
          .lm .logo { font-size: 20px; }
          .lm .logoicon { width: 32px; height: 32px; }
          .lm .navlinks { display: none; }
          .lm .navright { gap: 8px; }
          .lm .searchbox { width: min(45vw, 220px); height: 39px; }
          .lm .cartbtn { height: 39px; padding: 0 10px; }
          .lm .cartbtn .cartlabel { display: none; }
          .lm .main { padding-top: 21px; }
          .lm .hero { grid-template-columns: 1fr; }
          .lm .herotext { padding: 29px 25px 24px; }
          .lm .hero h1 { font-size: 34px; }
          .lm .herovisual { min-height: 190px; }
          .lm .herovisual:after { background: linear-gradient(180deg, rgba(245,245,245,0), rgba(245,245,245,0.2)); }
          .lm .dealbadge { width: 65px; height: 65px; right: 16px; top: 16px; }
          .lm .benefits { grid-template-columns: 1fr; gap: 9px; margin: 15px 0 31px; }
          .lm .benefit { padding: 12px; }
          .lm .sectionhead h2 { font-size: 21px; }
          .lm .productgrid { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 11px; }
          .lm .productimage { height: 150px; padding: 10px; }
          .lm .productbody { padding: 11px; }
          .lm .productname { font-size: 12px; }
          .lm .price { font-size: 15px; }
          .lm .addbtn { width: 31px; height: 31px; }
          .lm .widebanner { grid-template-columns: 1fr; padding: 24px; margin-top: 30px; }
          .lm .widebanner .primary { justify-self: start; }
          .lm .footerinner { flex-direction: column; }
        }
        @media (max-width: 390px) {
          .lm .searchbox { width: 135px; }
          .lm .productimage { height: 125px; }
          .lm .productbottom { align-items: end; }
          .lm .sectionhead { align-items: start; }
        }
      `}</style>

      <div className="topline">
        Your next tech upgrade starts here. <strong>Discover the collection →</strong>
      </div>

      <header className="navbar">
        <div className="wrap navinner">
          <a className="logo" href="#" aria-label="Lainne Market home">
            <span className="logoicon">L</span>
            <span>lainne<span>market.</span></span>
          </a>

          <nav className="navlinks" aria-label="Main navigation">
            <button onClick={() => { setCategory("All products"); setSearch(""); }}>Shop</button>
            <button onClick={() => { setCategory("Computers"); document.getElementById("products")?.scrollIntoView({ behavior: "smooth" }); }}>Computers</button>
            <button onClick={() => { setCategory("Audio"); document.getElementById("products")?.scrollIntoView({ behavior: "smooth" }); }}>Audio</button>
            <button onClick={() => document.getElementById("deals")?.scrollIntoView({ behavior: "smooth" })}>Deals</button>
          </nav>

          <div className="navright">
            <label className="searchbox">
              <span>⌕</span>
              <input
                value={search}
                onChange={(event) => {
                  setSearch(event.target.value);
                  document.getElementById("products")?.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
                placeholder="Search products..."
                aria-label="Search products"
              />
            </label>
            <button className="cartbtn" onClick={() => setCartOpen(true)} aria-label={`Open shopping bag, ${cartCount} items`}>
              <span className="carticon">♧</span>
              <span className="cartlabel">Bag</span>
              <span className="cartcount">{cartCount}</span>
            </button>
          </div>
        </div>
      </header>

      <main className="wrap main">
        <div className="breadcrumb">Home&nbsp; / &nbsp;<strong>Discover technology</strong></div>

        <section className="hero">
          <div className="herotext">
            <div className="eyebrow"><span className="eyedot" /> THE TECH EDIT</div>
            <h1>Better tech.<br />Better <span>everyday.</span></h1>
            <p>Discover the devices and accessories that make work, play and everything in between a little better.</p>
            <button className="primary" onClick={() => document.getElementById("products")?.scrollIntoView({ behavior: "smooth" })}>
              Explore products&nbsp; →
            </button>
          </div>
          <div className="herovisual">
            <img
              src="https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&w=1100&q=90"
              alt="Modern electronics and technology accessories"
            />
            <div className="dealbadge">Tech<br />finds<small>YOU'LL LOVE</small></div>
          </div>
        </section>

        <section className="benefits" aria-label="Shopping benefits">
          <div className="benefit">
            <div className="benefiticon">↗</div>
            <div><strong>Made for everyday</strong><small>Useful tech, thoughtfully selected</small></div>
          </div>
          <div className="benefit">
            <div className="benefiticon">◇</div>
            <div><strong>Easy to explore</strong><small>Find your next favourite gadget</small></div>
          </div>
          <div className="benefit">
            <div className="benefiticon">♡</div>
            <div><strong>Shopping made simple</strong><small>A clear, easy-to-use experience</small></div>
          </div>
        </section>

        <section id="products">
          <div className="sectionhead">
            <div>
              <h2>Find your next favourite</h2>
              <p>Everyday essentials and tech worth getting excited about.</p>
            </div>
            <button className="textbtn" onClick={() => { setCategory("All products"); setSearch(""); }}>
              View all&nbsp; →
            </button>
          </div>

          <div className="categories" aria-label="Filter products by category">
            {categories.map((item) => (
              <button
                key={item.name}
                className={`category ${category === item.name ? "active" : ""}`}
                onClick={() => setCategory(item.name)}
              >
                <span>{item.icon}</span>{item.name}
              </button>
            ))}
          </div>

          <div className="productgrid">
            {filteredProducts.length === 0 ? (
              <div className="empty">
                <h3>No products found</h3>
                <p>Try another search or select a different category.</p>
                <button className="primary" onClick={() => { setCategory("All products"); setSearch(""); }}>Clear filters</button>
              </div>
            ) : filteredProducts.map((product) => (
              <article className="product" key={product.id}>
                <div className="productimage">
                  {product.tag && <span className="tag">{product.tag}</span>}
                  <img src={product.image} alt={product.name} loading="lazy" />
                </div>
                <div className="productbody">
                  <div className="productcat">{product.category}</div>
                  <h3 className="productname">{product.name}</h3>
                  <div className="rating">★ ★ ★ ★ ★ <span>{product.rating} / 5</span></div>
                  <div className="productbottom">
                    <div>
                      <div className="price">{money(product.price)}</div>
                      {product.oldPrice && <div className="oldprice">{money(product.oldPrice)}</div>}
                    </div>
                    <button className="addbtn" onClick={() => addToCart(product)} aria-label={`Add ${product.name} to bag`}>+</button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="widebanner" id="deals">
          <div>
            <div className="eyebrow">YOUR SETUP, UPGRADED</div>
            <h3>Small upgrades. Big difference.</h3>
            <p>From your desk to your daily commute, discover tech that works for you.</p>
          </div>
          <button className="primary" onClick={() => { setCategory("Accessories"); document.getElementById("products")?.scrollIntoView({ behavior: "smooth" }); }}>
            Explore accessories&nbsp; →
          </button>
        </section>
      </main>

      <footer className="footer">
        <div className="wrap footerinner">
          <div><strong>lainne market.</strong> &nbsp;Tech for your everyday.</div>
          <div>Demo storefront · Prices and products are sample data</div>
          <div>© {new Date().getFullYear()} Lainne Market</div>
        </div>
      </footer>

      {notice && <div className="toast" role="status">{notice}</div>}
      
      <button
        className="chat-launcher"
        onClick={() => setChatOpen(!chatOpen)}
        aria-label="Open shopping assistant"
      >
        {chatOpen ? "×" : "💬"}
      </button>

      {chatOpen && (
        <section className="chat-panel" aria-label="Lainne shopping assistant">
          <header className="chat-header">
            <div>
              <strong>Lainne AI Assistant</strong>
              <p>Here to help you shop</p>
            </div>
            <button onClick={() => setChatOpen(false)} aria-label="Close chat">
              ×
            </button>
          </header>

          <div className="chat-body">
            {chatMessages.map((message, index) => (
              <div className={`chat-message ${message.role}`} key={index}>
                {message.text}
              </div>
            ))}
          </div>

          <form className="chat-input" onSubmit={sendChatMessage}>
            <input
              value={chatMessage}
              onChange={(event) => setChatMessage(event.target.value)}
              placeholder="Ask about our products..."
              aria-label="Your message"
            />
            <button type="submit" disabled={!chatMessage.trim()}>
              Send
            </button>
          </form>
        </section>
      )}

      {cartOpen && (
        <div className="overlay" onClick={() => setCartOpen(false)}>
          <aside className="drawer" role="dialog" aria-modal="true" aria-label="Shopping bag" onClick={(event) => event.stopPropagation()}>
            <div className="drawerhead">
              <h2>Your shopping bag ({cartCount})</h2>
              <button className="closebtn" onClick={() => setCartOpen(false)} aria-label="Close shopping bag">×</button>
            </div>

            <div className="cartitems">
              {cart.length === 0 ? (
                <div className="empty">
                  <h3>Your bag is empty</h3>
                  <p>Find something you love and add it here.</p>
                  <button className="primary" onClick={() => setCartOpen(false)}>Explore products</button>
                </div>
              ) : cart.map((item) => (
                <div className="cartitem" key={item.id}>
                  <img src={item.image} alt="" />
                  <div className="cartiteminfo">
                    <strong>{item.name}</strong>
                    <small>{money(item.price)} each</small>
                    <div className="qty">
                      <button onClick={() => updateQuantity(item.id, -1)} aria-label={`Remove one ${item.name}`}>−</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, 1)} aria-label={`Add one ${item.name}`}>+</button>
                    </div>
                  </div>
                  <strong>{money(item.price * item.quantity)}</strong>
                </div>
              ))}
            </div>

            {cart.length > 0 && (
              <div className="carttotal">
                <div className="totalrow"><span>Subtotal</span><span>{money(cartTotal)}</span></div>
                <button className="primary full" onClick={() => window.alert("Demo only: checkout and payments have not been connected yet.")}>
                  Continue to checkout
                </button>
                <p className="checkoutnote">This is a demo store. No real order or payment will be processed.</p>
              </div>
            )}
          </aside>
        </div>
      )}
    </div>
  );
}