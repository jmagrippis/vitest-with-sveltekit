import {test} from '@playwright/test'
import {getDocument, queries} from 'playwright-testing-library'

const {getByRole, getByText} = queries

test('dashboard happy path', async ({page}) => {
	await page.goto('/dashboard')
	const $document = await getDocument(page)

	await getByRole($document, 'heading', {
		name: 'Dashboard',
		level: 1,
	})

	await getByRole($document, 'heading', {name: 'Overview', level: 2})

	await getByRole($document, 'heading', {name: 'Balance', level: 3})
	await getByText($document, '£12,345')

	await getByRole($document, 'heading', {name: 'Revenue', level: 3})
	await getByText($document, '£1,678,900')

	await getByRole($document, 'heading', {name: 'Pending', level: 3})
	await getByText($document, '£10,000')
})
