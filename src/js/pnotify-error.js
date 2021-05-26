import '@pnotify/core/dist/BrightTheme.css';
import { error } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';


function onFetchError() {
  error({
    title: 'Sorry, try once more',
    delay: 2000,
  });
}

function onDecreaseRequestError() {
  error({
    title: 'Too many matches found. Please enter a more specific query!',
    delay: 2000,
  });
}

export { onFetchError, onDecreaseRequestError };
