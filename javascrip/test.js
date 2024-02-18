// সংগ্রহ করুন সকল বাটনের লিস্ট
const buttons = document.querySelectorAll('.button');

// প্রতিটি বাটনের উপরে ক্লিক ইভেন্ট লিস্টেনার যোগ করুন
buttons.forEach(button => {
    button.addEventListener('click', () => {
        // কল হওয়া স্টেটমেন্ট
        console.log('বাটনে ক্লিক হয়েছে!');
        
        // ভ্যালুর মান আপডেট করুন
        const spanValue = document.getElementById('value');
        let currentValue = parseInt(spanValue.textContent);
        currentValue += 550;
        spanValue.textContent = currentValue;
    });
});