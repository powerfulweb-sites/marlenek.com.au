import contactForm from 'js/contact-form-xhr'
import * as params from '@params';

// production config
let formAction = 'https://mail2.powerfulwebdesign.com.au/index.php';
let account = 'marlenek';
let grecaptchaKey = '6LdA57wfAAAAAEb5gJOzeqi7hFBmf-QLUFzBe8uM';
let debug = false;

// dev config
if (params.env === 'development') {
  formAction = 'https://mail2.powerfulwebdesign.com.au/index.php'; // online
  // formAction = 'http://localhost/index.php'; // local test
  account = 'local';
  grecaptchaKey = '6LdUwwweAAAAAA9iDDa0A5RosBBoagSnU1yBvUQ3'; // local test
  debug = true
}

contactForm({
  formAction: formAction,
  account: account,
  grecaptchaKey: grecaptchaKey,
  debug: debug,
})

params.env === 'development' ? console.log('contact form dev env'): null;