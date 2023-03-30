import React, { useState } from 'react'
import "./LawyerCard"
const SearchBar = () => {
    const [tag, setTag] = useState("")
    return (
        <div className='search-bar'>
            <div className="select">
                <strong>Search By:</strong>
                <div class="mydict">
                    <div>
                        <label>
                            <input type="radio" name="radio" value="name" checked="" onClick={((e) => {
                                setTag(e.target.value)
                            })} />
                            <span>Name</span>
                        </label>
                        <label>
                            <input type="radio" name="radio" value="profession" onClick={((e) => {
                                setTag(e.target.value)
                            })} />
                            <span>Profession</span>
                        </label>
                        <label>
                            <input type="radio" name="radio" value="experience" onClick={((e) => {
                                setTag(e.target.value)
                            })} />
                            <span>Experience</span>
                        </label>

                    </div>
                </div>
            </div>
            <div className='group'>
                <form action="/" method="get">
                    <svg class="icon" aria-hidden="true" viewBox="0 0 24 24"><g><path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path></g></svg>
                    <input placeholder="Search" type="search" class="input" />
                </form>
            </div>
            <h1>{tag}</h1>
        </div>
    )
}

export default SearchBar