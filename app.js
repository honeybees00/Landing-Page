let url = "https://wwtctwboxdubvuwdngec.supabase.co/rest/v1/Products";
let apikey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind3dGN0d2JveGR1YnZ1d2RuZ2VjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ5MDMyMTgsImV4cCI6MjA4MDQ3OTIxOH0.XuzdDje5ddNokmPSfJ1mgwvXNzap6rhCSBZRrsOdXJw";

function getContact(){
    event.preventDefault();
    let name=document.getElementById("inputName").value;
    let email=document.getElementById("inputEmail").value;
    let contact= {
        name:name,
        email:email
        
        
    }
        console.log(contact);
    
}
