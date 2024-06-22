const app = () => {
 // alert('work')
  // In this problem, you should create a JS functionality that shows and hides the additional information about users.

  // When one of the [Show more] buttons is clicked, the hidden information inside the div should
  // be shown, only if the profile is not locked! If the current profile is locked, nothing should happen.

  // If the hidden information is displayed and we lock the profile again, the [Hide it] button should not be working!
  // Otherwise, when the profile is unlocked and we click on the [Hide it] button, the new fields must hide again.


            // First Show more button 
  const revealBtn = document.querySelector('.reveal-btn');
  

  const hiddenContent = document.querySelector('#user1HiddenFields')

    function revealContent() {
        if (hiddenContent.classList.contains('reveal-btn')
        ) {
            hiddenContent.classList.remove('reveal-btn')
        } else {
            hiddenContent.classList.add('reveal-btn')
        }
    }

    revealBtn.addEventListener('click', revealContent)
 
                // Second Show more button

    const revealSecondBtn = document.querySelector('.reveal-btn2')

    const seccondHiddenContent = document.querySelector('#user2HiddenFields')
        function secondRevealContent() {
            if (seccondHiddenContent.classList.contains('reveal-btn2')
            ) {
                seccondHiddenContent.classList.remove('reveal-btn2')
            } else {
                seccondHiddenContent.classList.add('reveal-btn2')
            }
        }
     revealSecondBtn.addEventListener('click', secondRevealContent)


 // console.log("TODO...");
}
window.addEventListener('load', app)