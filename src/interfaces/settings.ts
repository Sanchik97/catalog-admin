import {idType, IImage} from "@app/interfaces/index"

export interface ISettings {
	created_at: string
	fields: ISettingsFields
	id: idType
	updated_at: string
}

export interface ISettingsSocial {
	link: string
	title: string
}

export interface ISettingsSeo {
	description: string | null
	keywords: string | null
	title: string | null
}

export interface ISettingsFields {
	address_ru: string
	address_uz: string
	email: string
	instagram: ISettingsSocial
	phone1: string
	phone2: string
	phone3: string
	schedule_ru: string
	schedule_uz: string
	seo_ru: ISettingsSeo
	seo_uz: ISettingsSeo
	sliders: IImage[]
	telegram: ISettingsSocial
}
