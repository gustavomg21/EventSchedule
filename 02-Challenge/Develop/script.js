// Initialize locale settings
const settings = {};
dayjs.locale(settings);

$(function () {
  
  const liveTime = 13;//sets time to 1pm for testing
  // const liveTime = dayjs().format('H');// Get the current time
  const dateEl = $('#date');// Stores the date element by id

  // Update the date once per second
  function updateTime() {
    
    const currentDate = dayjs().format('dddd, MMMM D, YYYY');
    dateEl.text(currentDate);
  }
  // Set the color of each time block based on the current time
  function setColor() {
    $('.time-block').each(function() {
      const blockHour = parseInt(this.id);
      $(this).toggleClass('past', blockHour < liveTime);
      $(this).toggleClass('present', blockHour === liveTime);
      $(this).toggleClass('future', blockHour > liveTime);
    });
  }

  // Save the entered event when the save button is clicked
  function saveEntry() {
    $('.saveBtn').on('click', function() {
      const key = $(this).parent().attr('id');
      const value = $(this).siblings('.description').val();
      localStorage.setItem(key, value);
    });
  }

  // Update the color of each time block based on the current time periodically
  function updateColor() {
    $('.time-block').each(function() {
      const blockHour = parseInt(this.id);
      if (blockHour == liveTime) {
        $(this).removeClass('past future').addClass('present');
      } else if (blockHour < liveTime) {
        $(this).removeClass('future present').addClass('past');
      } else {
        $(this).removeClass('past present').addClass('future');
      }
    });
  }

  // Load previously saved events to the schedule
  function loadEntries() {
    $('.time-block').each(function() {
      const key = $(this).attr('id');
      const value = localStorage.getItem(key);
      $(this).children('.description').val(value);
    });
  }


  loadEntries();
  setColor();
  saveEntry();
  updateColor();

  // Periodically update the date
  setInterval(updateTime, 5000);
});

console.log("\r\n\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u28E0\u28F4\u28F6\u28FF\u28FF\u28F7\u28F6\u28C4\u28C0\u28C0\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\r\n\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u28F0\u28FE\u28FF\u28FF\u287F\u28BF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28F7\u28E6\u2840\u2800\u2800\u2800\u2800\u2800\r\n\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2880\u28FE\u28FF\u28FF\u285F\u2801\u28F0\u28FF\u28FF\u28FF\u287F\u283F\u283B\u283F\u28FF\u28FF\u28FF\u28FF\u28E7\u2800\u2800\u2800\u2800\r\n\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u28FE\u28FF\u28FF\u280F\u2800\u28F4\u28FF\u28FF\u28FF\u2809\u2800\u2800\u2800\u2800\u2800\u2808\u28BB\u28FF\u28FF\u28C7\u2800\u2800\u2800\r\n\u2800\u2800\u2800\u2800\u2880\u28E0\u28FC\u28FF\u28FF\u284F\u2800\u28A0\u28FF\u28FF\u28FF\u2807\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2808\u28FF\u28FF\u28FF\u2840\u2800\u2800\r\n\u2800\u2800\u2800\u28F0\u28FF\u28FF\u28FF\u28FF\u28FF\u2847\u2800\u28B8\u28FF\u28FF\u28FF\u2840\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u28FF\u28FF\u28FF\u2847\u2800\u2800\r\n\u2800\u2800\u28B0\u28FF\u28FF\u287F\u28FF\u28FF\u28FF\u2847\u2800\u2818\u28FF\u28FF\u28FF\u28E7\u2800\u2800\u2800\u2800\u2800\u2800\u2880\u28F8\u28FF\u28FF\u28FF\u2801\u2800\u2800\r\n\u2800\u2800\u28FF\u28FF\u28FF\u2801\u28FF\u28FF\u28FF\u2847\u2800\u2800\u283B\u28FF\u28FF\u28FF\u28F7\u28F6\u28F6\u28F6\u28F6\u28F6\u28FF\u28FF\u28FF\u28FF\u2803\u2800\u2800\u2800\r\n\u2800\u28B0\u28FF\u28FF\u2847\u2800\u28FF\u28FF\u28FF\u2800\u2800\u2800\u2800\u2808\u283B\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u281F\u2801\u2800\u2800\u2800\u2800\r\n\u2800\u28B8\u28FF\u28FF\u2847\u2800\u28FF\u28FF\u28FF\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2809\u281B\u281B\u281B\u2809\u2889\u28FF\u28FF\u2800\u2800\u2800\u2800\u2800\u2800\r\n\u2800\u28B8\u28FF\u28FF\u28C7\u2800\u28FF\u28FF\u28FF\u2800\u2800\u2800\u2800\u2800\u2880\u28E4\u28E4\u28E4\u2840\u2800\u2800\u28B8\u28FF\u28FF\u28FF\u28F7\u28E6\u2800\u2800\u2800\r\n\u2800\u2800\u28BB\u28FF\u28FF\u28F6\u28FF\u28FF\u28FF\u2800\u2800\u2800\u2800\u2800\u2808\u283B\u28FF\u28FF\u28FF\u28E6\u2840\u2800\u2809\u2809\u283B\u28FF\u28FF\u2847\u2800\u2800\r\n\u2800\u2800\u2800\u281B\u283F\u28FF\u28FF\u28FF\u28FF\u28F7\u28E4\u2840\u2800\u2800\u2800\u2800\u2808\u2839\u28FF\u28FF\u28C7\u28C0\u2800\u28E0\u28FE\u28FF\u28FF\u2847\u2800\u2800\r\n\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2839\u28FF\u28FF\u28FF\u28FF\u28E6\u28E4\u28E4\u28E4\u28E4\u28FE\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u285F\u2800\u2800\u2800\r\n\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2809\u283B\u28BF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u283F\u280B\u2809\u281B\u280B\u2809\u2809\u2801\u2800\u2800\u2800\u2800\r\n\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2808\u2809\u2809\u2809\u2801")