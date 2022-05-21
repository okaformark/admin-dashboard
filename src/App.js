import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import './App.css';

function App() {
	const activeMenu = true;
	return (
		<div>
			<BrowserRouter>
				<div className='flex relative dark:bg-main-dark-bg'>
					<div className='fixed right-4 bottom-4' style={{ zIndex: '1000' }}>
						<TooltipComponent
							content='Settings'
							target='settings'
							position='Top'
							openMode='Click'
							showTipPointer={true}
						>
							<button
								className='text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white'
								type='button'
								style={{ background: 'blue', borderRadius: '50%' }}
							>
								<FiSettings />
							</button>
						</TooltipComponent>
					</div>
					{activeMenu ? (
						<div className='w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white'>
							Sidebar
						</div>
					) : (
						<div className='w-0 dark:bg-secondary-dark-bg'>Siderbar - 0</div>
					)}
					<div
						className={`dark:bg-main-bg bg-main-bg min-h-screen w-full
						${activeMenu ? ' md:ml-72' : 'flex-2'}`}
					>
						<div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
							Navbar
						</div>
					</div>
					<div>
						<Routes>
							{/* Dashboard */}
							<Route path='/' element={<div>Ecommerce</div>} />
							<Route path='/ecommerce' element={<div>Ecommerce</div>} />

							{/* Pages */}
							<Route path='/orders' element={<div>Orders</div>} />
							<Route path='/employees' element={<div>Employees</div>} />
							<Route path='/customers' element={<div>Customers</div>} />

							{/* Apps */}
							<Route path='/kanban' element={<div>Kanban</div>} />
							<Route path='/editor' element={<div>Editor</div>} />
							<Route path='/calendar' element={<div>Calendar</div>} />
							<Route path='/color-picker' element={<div>ColorPicker</div>} />

							{/* Charts */}
							<Route path='/line' element={<div>Line</div>} />
							<Route path='/area' element={<div>Area</div>} />
							<Route path='/bar' element={<div>Bar</div>} />
							<Route path='/pie' element={<div>Pie</div>} />
							<Route path='/financial' element={<div>Financial</div>} />
							<Route path='/color-mapping' element={<div>ColorMapping</div>} />
							<Route path='/pyramid' element={<div>Pyramid</div>} />
							<Route path='/stacked' element={<div>Stacked</div>} />
						</Routes>
					</div>
				</div>
			</BrowserRouter>
		</div>
	);
}

export default App;
