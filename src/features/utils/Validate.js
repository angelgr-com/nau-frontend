export const validate = (type,value) => {


  switch(type) {

    case 'email' :
      if (! /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(value) ) {
        
        return "Invalid email.";
      } else {
        
        return "ok";
      };
        
    
    case 'name': 
      if (! /[a-z]/gi.test(value) ) {
        return "Invalid name.";
      }else{
        return "ok";
      };
    
    case 'phone':
      if (! /[\d()+-]/g.test(value) ) {
        return "Introduce un telefono válido";
      } else {
        return "ok";
      };

    default:
      return "ok";
  }
};