module.exports = {
  content: ["./public/**/*.html"],
  darkmode: "meadia",
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    
    extend: {

      screens: {
        '3xl': '1620px', // اندازه جدید با عرض 1920px
      },
     
      colors: {
        primary: {
          "": "#417F56",
        },
        tint: {
          1: "#E5F2E9",
          2: "#CAE4D3",
          3: "#B0D7BD",
          4: "#96C9A7",
          5: "#7CBC91",
          6: "#61AE7B",
          7: "#4E9968",
        },
        shde: {
          1: "#396F4B",
          2: "#315F41",
          3: "#294F36",
          4: "#21402B",
          5: "#183020",
          6: "#102016",
          7: "#08100B",
        },
        situation: {
          Eror: "#C30000",
          Erorlight: "#ED2E2E",
          erorextallight: "#FFF2F2",
          succsec: "#00966D",
          succseclight: "#00BA88",
          6: "#102016",
          7: "#08100B",
        },
      },

      fontFamily: {
        sans: ["yekan"],
      },
    },
  },
  
  variants: {
    extend: {
      borderRadius: ['hover'],
    },
  },

  
  plugins: [],
};
