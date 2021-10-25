---
title: Contact
---

<form method="POST" data-netlify="true" name="Contact Form" data-netlify-recaptcha="true">
    <label for="Name">Name</label>
    <input class="mb-2 px-3 py-2 rounded block dark:bg-dark-200 bg-light-50 w-full" type="text" id="Name" name="Name" placeholder="" required>
    <label for="Email">Email</label>
    <input class="mb-2 px-3 py-2 rounded block dark:bg-dark-200 bg-light-50 w-full" type="Email" id="Email" name="Email" placeholder="" required>
    <label for="Message">Message</label>
    <textarea class="px-3 py-2 rounded block dark:bg-dark-200 bg-light-50 w-full" id="Message" rows="5" name="Message" placeholder="" required></textarea>
    <br>
    <div data-netlify-recaptcha="true"></div>
    <button type="submit" class="btn btn-primary"><i class="fas fa-paper-plane"></i> Send Message</button>
</form>