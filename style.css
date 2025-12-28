* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body, html {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background:
        radial-gradient(circle at top, rgba(255, 150, 180, 0.25), transparent 60%),
        radial-gradient(circle at bottom, rgba(150, 100, 255, 0.25), transparent 60%),
        linear-gradient(135deg, #0f0c29, #302b63, #24243e);
    font-family: 'Poppins', sans-serif;
    overflow: hidden;
}


.container {
    text-align: center;
    padding: 30px 40px;
    background: rgba(255, 255, 255, 0.12);
    backdrop-filter: blur(14px);
    border-radius: 22px;
    box-shadow: 
        0 10px 40px rgba(0,0,0,0.35),
        inset 0 0 20px rgba(255,255,255,0.1);
    color: #fff;
    z-index: 2;
}


.message-box h1 {
    font-size: 34px;
    color: #ffd6e7;
}

.message-box p {
    font-size: 17px;
    color: #f5e9ff;
    line-height: 1.7;
}


.celebrate-btn {
    margin-top: 22px;
    padding: 12px 28px;
    font-size: 16px;
    border-radius: 30px;
    border: none;
    cursor: pointer;
    background: linear-gradient(135deg, #ff7eb3, #ff758c);
    color: white;
    box-shadow: 0 8px 25px rgba(255, 120, 170, 0.45);
    transition: all 0.3s ease;
}

.celebrate-btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 35px rgba(255, 120, 170, 0.65);
}


.firework {
    position: absolute;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: radial-gradient(circle, #fff, currentColor);
    filter: blur(0.5px);
    animation: explode 1.4s cubic-bezier(.17,.67,.5,1) forwards;
    box-shadow:
        0 0 10px currentColor,
        0 0 20px currentColor,
        0 0 40px currentColor;
}

@keyframes explode {
    0% {
        transform: translate(0,0) scale(1);
        opacity: 1;
    }
    70% {
        opacity: 1;
    }
    100% {
        transform: translate(var(--x), var(--y)) scale(0.2);
        opacity: 0;
    }
}

/* mobile tweak */
@media (max-width: 600px) {
    .firework {
        width: 4px;
        height: 4px;
    }
}



@keyframes fadeIn {
    0% {
        opacity: 0;
        transform: translateY(20px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
}

@media screen and (max-width: 600px) {
    .message-box h1 {
        font-size: 28px;
    }

    .message-box p {
        font-size: 16px;
    }

    .celebrate-btn {
        font-size: 18px;
        padding: 8px 16px;
    }
}
