import {RcFile} from "antd/es/upload"
import {message} from "antd"

export function beforeUpload(file: RcFile) {
	const isImage = file.type === 'image/jpeg' || file.type === 'image/png'

	if (!isImage) {
		message.error('Вы можете загрузить только jpeg или png')
	}
	const isLt2M = file.size / 1024 / 1024 < 2
	if (!isLt2M) {
		message.error('Размер изображения не должен превышать 2 мегабайта')
	}
	return isImage && isLt2M
}
