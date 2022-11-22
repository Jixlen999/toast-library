# Toast library

## How to use

1. ```import {Toasts, toastService} from 'jix-toast-library'```
2. Create state for keeping future toasts:
   ```const [toasts, setToasts] = useState([]);```
3. Create a toast or some toasts using the next syntax:
   ```toastService.createToast()```
   You also can manually setup your toasts:
   ```
   toastService.createToast({
   		title: someValue, //text (default depends on variant)
   		text: someValue, //text
   		variant: someValue, //possible: success (default), warning, info, danger
   		color: someValue, //any color value (default depends on variant)
   		iconAndTextColor: someValue, //any color value (default is #fafafa)
   		position: someValue, //possible: top-left, top-center, top-right, bottom-left, bottom-center, bottom-right (default) 
   		spacing: someValue, //from 0 to 200
   		animation: someValue, //possible: slideRight (default), fadeIn, bounceRight 
   		timer: someValue, //seconds
   	})
   ```
4. Use your state created on step 2 to save created toasts: 
	``` setToasts(toastService.getToasts()); ```
5. Use Toasts component to display your toasts (pass in your state from step 2 to the "toasts" prop):
	```<Toasts toasts={toasts} />```
