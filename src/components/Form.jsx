import MakeCheckbox from "./Checkbox.jsx"
import RadioBtn from "./RadioBtn.jsx"

export default function CreateForm({ answerItem, setAnswer }) {

    function handleSubmit(event) {
        event.preventDefault()
    }

    function handleChange(event) {
        console.log(event.target.name)
        console.log(event.target.value)
        setAnswer({ ...answerItem, [event.target.name]: event.target.value })
        console.log(answerItem)
    }

    return (
        <form class="form" onSubmit={handleSubmit}>
            <h2>Tell us what you think about your rubber duck!</h2>
            <div class="form__group">
                <h3>What would you say that are the best features of your rubber duck?</h3>
                <ul>
                    <MakeCheckbox onChange={handleChange} value="sound" name="bestFeatures">It squeak!</MakeCheckbox>
                    <MakeCheckbox onChange={handleChange} value="logo" name="bestFeatures">It has a logo!</MakeCheckbox>
                    <MakeCheckbox onChange={handleChange} value="size" name="bestFeatures">It's big!'</MakeCheckbox>
                    <MakeCheckbox onChange={handleChange} value="logo" name="bestFeatures">It has a logo!</MakeCheckbox>
                </ul>
            </div>
            <div class="form__group">
                <h3>What would you say that are the worst bits of your rubber duck?</h3>
                <ul>
                    <MakeCheckbox onChange={handleChange} value="colour" name="worstFeatures">It's yellow!</MakeCheckbox>
                    <MakeCheckbox onChange={handleChange} value="sound" name="worstFeatures">It squeaks</MakeCheckbox>
                    <MakeCheckbox onChange={handleChange} value="logo" name="worstFeatures">It has a logo!</MakeCheckbox>
                    <MakeCheckbox onChange={handleChange} value="size" name="worstFeatures">It's big!</MakeCheckbox>
                </ul>
            </div>
            <div class="form__group radio">
                <h3>How do you rate your rubber duck consistency?</h3>
                <ul>
                    <RadioBtn id="consistency1" value="1" onChange={handleChange}>1</RadioBtn>
                    <RadioBtn id="consistency2" value="2" onChange={handleChange}>2</RadioBtn>
                    <RadioBtn id="consistency3" value="3" onChange={handleChange}>3</RadioBtn>
                    <RadioBtn id="consistency4" value="4" onChange={handleChange}>4</RadioBtn>
                </ul>

            </div>
            <div class="form__group radio">
                <h3>How do you rate your rubber duck colour?</h3>
                <ul>
                    <li>
                        <input id="colour1" type="radio" name="colour" value="1" onChange={handleChange} on={true} /><label
                            for="colour1"
                        >1</label
                        >
                    </li>
                    <li>
                        <input id="colour2" type="radio" name="colour" value="2" onChange={handleChange} /><label
                            for="colour2"
                        >2</label
                        >
                    </li>
                    <li>
                        <input id="colour3" type="radio" name="colour" value="3" onChange={handleChange} /><label
                            for="colour3"
                        >3</label
                        >
                    </li>
                    <li>
                        <input id="colour4" type="radio" name="color" value="4" onChange={handleChange} /><label
                            for="colour4"
                        >4</label
                        >
                    </li>
                </ul>

            </div>
            <div class="form__group radio">
                <h3>How do you rate your rubber duck logo?</h3>
                <ul>
                    <li>
                        <input id="logo1" type="radio" name="logo" value="1" onChange={handleChange} /><label
                            for="logo1"
                        >1</label
                        >
                    </li>
                    <li>
                        <input id="logo2" type="radio" name="logo" value="2" onChange={handleChange} /><label
                            for="logo2"
                        >2</label
                        >
                    </li>
                    <li>
                        <input id="logo3" type="radio" name="logo" value="3" onChange={handleChange} /><label
                            for="logo3"
                        >3</label
                        >
                    </li>
                    <li>
                        <input id="logo4" type="radio" name="logo" value="4" onChange={handleChange} /><label
                            for="logo4"
                        >4</label
                        >
                    </li>
                </ul>

            </div>
            <div class="form__group">
                <h3>How do you like to spend time with your rubber duck</h3>
                <ul>
                    <li>
                        <label
                        ><input name="time" type="checkbox" value="1" on={true} onChange={handleChange} />Swimming</label
                        >
                    </li>
                    <li>
                        <label
                        ><input name="time" type="checkbox" value="2" onChange={handleChange} />Bathing</label
                        >
                    </li>
                    <li>
                        <label
                        ><input name="time" type="checkbox" value="3" onChange={handleChange} />Chatting
                        </label>
                    </li>
                    <li>
                        <label
                        ><input name="time" type="checkbox" value="4" onChange={handleChange} />I don't like to spend time with it</label
                        >
                    </li>
                </ul>
            </div>
            <label
            >What else have you got to say about your rubber duck?<textarea
                name="review"
                cols="30"
                rows="10"
                onChange={handleChange}
            ></textarea></label
            ><label
            >Put your name here (if you feel like it):<input
                    type="text"
                    name="username"
                    value=""
                    onChange={handleChange} /></label
            ><label
            >Leave us your email pretty please??<input
                    type="email"
                    name="email"
                    value=""
                    onChange={handleChange} /></label
            ><input class="form__submit" type="submit" value="Submit Survey!" />
        </form >


    )
}
