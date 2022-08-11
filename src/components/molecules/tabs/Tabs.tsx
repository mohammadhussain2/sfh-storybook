
import React, {useState} from 'react'

export const Tabs:React.FC = () => {
    const [count, setCount] = useState(0)
    return (
        <div>
            <nav className="c-tabs c-secondary-nav">
                <ul className="c-secondary-nav__list" data-js-tabs data-tabs-keep-open>
                    <li className="c-secondary-nav__list-item is-active" data-tabs-toggle="card_detail_value" data-tabs-toggle-default>
                        <button className="c-secondary-nav__link" onClick={()=> setCount(count + 1)}>
                            Activitss: {count}
                        </button>
                    </li>
                    <li className="c-secondary-nav__list-item
            
            " data-tabs-toggle="card_detail_restriction" data-tabs-toggle-default>
                        <a href="#" className="c-secondary-nav__link
                ">

                            Restrictions
                        </a>
                    </li>
                    <li className="c-secondary-nav__list-item
            
            " data-tabs-toggle="card_detail_details" data-tabs-toggle-default>
                        <a href="#" className="c-secondary-nav__link
                ">

                            Details
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
