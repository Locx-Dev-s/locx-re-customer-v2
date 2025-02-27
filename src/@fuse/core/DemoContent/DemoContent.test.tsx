import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';

import DemoContent from './DemoContent';

describe('DemoContent', () => {
	it('should render correctly', () => {
		render(<DemoContent />);
		const textFound = screen.getByText('Demo Content');
		expect(textFound).toBeInTheDocument();
	});
});
