import {render} from '@testing-library/svelte'
import DashboardSvelte from './Dashboard.svelte'

const props = {
	balance: 12_345,
	revenue: 1_678_900,
	pending: 10_000,
}

it('has a main heading for "Dashboard"', () => {
	const {getByRole} = render(DashboardSvelte, props)

	expect(
		getByRole('heading', {name: 'Dashboard', level: 1})
	).toBeInTheDocument()
})

describe('Overview section', () => {
	it('has a section heading for "Overview"', () => {
		const {getByRole} = render(DashboardSvelte, props)

		expect(
			getByRole('heading', {name: 'Overview', level: 2})
		).toBeInTheDocument()
	})

	it('displays the balance', () => {
		const {getByRole, getByText} = render(DashboardSvelte, props)

		expect(
			getByRole('heading', {name: 'Balance', level: 3})
		).toBeInTheDocument()
		expect(getByText('£12,345')).toBeInTheDocument()
	})

	it('displays the revenue', () => {
		const {getByRole, getByText} = render(DashboardSvelte, props)

		expect(
			getByRole('heading', {name: 'Revenue', level: 3})
		).toBeInTheDocument()
		expect(getByText('£1,678,900')).toBeInTheDocument()
	})

	it('displays the pending', () => {
		const {getByRole, getByText} = render(DashboardSvelte, props)

		expect(
			getByRole('heading', {name: 'Pending', level: 3})
		).toBeInTheDocument()
		expect(getByText('£10,000')).toBeInTheDocument()
	})
})
