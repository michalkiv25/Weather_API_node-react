export default function validate(searchInput){
    let errors= null;

    if (searchInput.length <= 1) { //Check value of user
      errors = 'City needs to be 1 characters or more';
    } 
 
    return errors;
};