/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    fontFamily: {
       display: ['"League Spartan"', '"sans-serif"']
    },
    backgroundColor: {
       "main-bg": "var(--main-bg)",
       "toggle-bg": "var(--toggle-bg)",
       "keypad-bg": "var(--keypad-bg)",
       "screen-bg": "var(--screen-bg)",
       "reset-key": "var(--reset-key)",
       "equal-key": "var(--equal-key)",
       "del-key": "var(--del-key)",
       "toggle-circle": "var(--toggle-circle)",
       "key-bg": "var(--key-bg)",
    },
    colors: {
      "key-shadow": "var(--key-shadow)",
      "del-shadow": "var(--del-shadow)",
      "reset-shadow": "var(--reset-shadow)",
      "equal-shadow": "var(--equal-shadow)",
    },
    textColor: {
      "text-dark": "var(--text-dark)",
      "text-light": "var(--text-light)",
      "text-blue": "var(--text-blue)",
      "number-text": "var(--number-text)",
      "screen-text": "var(--screen-text)"
    },
    container: {
      screen: {
        '2xl':'1440px'
      }
    },
    extend: {
      
    },
  },
  plugins: [],
}

