// tailwind.config.js
tailwind.config = {
    theme: {
        extend:{
            gridTemplateColumns: {
                'auto': 'repeat(auto-fit, minmax(200px, 1fr))',
              },
              fontFamily:{
                  Outfit: ["Outfit", "sans-serif"],
                  Ovo:["Ovo", "serif"]
              },
              animation:{
                  spin_slow:'spin 6s linear infinite'
              },
              colors:{
                 darkTheme:'#11001F'
              }
      
        }
        
      },
      darkMode:'selector'
};
  