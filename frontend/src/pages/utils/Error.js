import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { css } from 'glamor';

export default function HandleError() {
	toast.error('Item já adicionado!', {
		position: 'bottom-right',
		autoClose: 5000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: false,
		draggable: true,
		className: css({
			background: '#5e3eca',
			color: '#FFF'
		})
	});
}