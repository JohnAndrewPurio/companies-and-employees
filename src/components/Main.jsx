import Home from './Home'
import { useEffect } from 'react'
import { Switch, Route, useHistory } from 'react-router-dom'
import CompanyOverview from './CompanyOverview'
import { useSelector } from 'react-redux'

export default function Main() {
    const history = useHistory()
    const companiesList = useSelector(state => state.companiesList)

    useEffect(() => {
        history.push('/companies')

        // eslint-disable-next-line
    }, [])

    return (
        <div className="Main">
            <Switch>
                <Route exact path="/companies" component={Home} />
                {
                    companiesList && companiesList.map(company => (
                        <Route key={company.id} exact path={`/companies/${company.id}`} render={() => <CompanyOverview id={company.id} />} />
                    ))
                }
            </Switch>
        </div>

    )
}