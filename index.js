const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const response = {
	is_success: true,
	user_id: 'prabal_sonii',
	email: 'prabal2340.be21@chitkara.edu.in',
	roll_number: 2110992340,
	odd_numbers: [],
	even_numbers: [],
	alphabets: []
}

app.get('/',(req,res)=>{
	return res.send('hi);
})

app.post('/bfhl', (req, res) => {
	for (let i = 0; i < req.body.length; i++) {
		if (typeof req.body[i] === 'number') {
			if (req.body[i] % 2 == 0) {
				response.even_numbers.add(req.body[i])
			} else {
				response.odd_numbers.add(req.body[i])
			}
		} else if (typeof req.body[i] === 'string') {
			response.alphabets.add(req.body[i])
		}
	}

	return res.status(200).json(response)
})

app.listen(5000, () => {
	console.log('Server Started')
})
