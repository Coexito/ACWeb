function getData() {
	var name = document.getElementById("name").value;
	var year = document.getElementById("year").value;
	var personality = document.getElementById("personality").value;
	var random = 0;
	var genre;

	if (document.getElementById("h").checked) {
		genre = document.getElementById("h").value;
	} else if(genre = document.getElementById("m").checked) {
		genre = document.getElementById("m").value;
	} else if(genre = document.getElementById("o").checked) {
		genre = document.getElementById("o").value;
	}

	if(personality.localeCompare("aventurero") == 0){
		switch (genre){
			case 'h':
			/*atlético*/window.open("https://animalcrossing.fandom.com/es/wiki/Categor%C3%ADa:Atl%C3%A9tico");
			break;
			case 'm':
			/*alegre*/window.open("https://animalcrossing.fandom.com/es/wiki/Categor%C3%ADa:Alegre");
			break;
			case 'o':
			random = Math.random();
			if(random < 0.49)
				window.open("https://animalcrossing.fandom.com/es/wiki/Categor%C3%ADa:Atl%C3%A9tico");
			else
				window.open("https://animalcrossing.fandom.com/es/wiki/Categor%C3%ADa:Alegre");
			break;
		}
	}
	else if(personality.localeCompare("intelectual") == 0){
		switch (genre){
			case 'h':
			/*esnob*/window.open("https://animalcrossing.fandom.com/es/wiki/Categor%C3%ADa:Esnob");
			break;
			case 'm':
			/*presumida*/window.open("https://animalcrossing.fandom.com/es/wiki/Categor%C3%ADa:Presumida");
			break;
			case 'o':
			random = Math.random();
			if(random < 0.49)
				window.open("https://animalcrossing.fandom.com/es/wiki/Categor%C3%ADa:Esnob");
			else
				window.open("https://animalcrossing.fandom.com/es/wiki/Categor%C3%ADa:Presumida");
			break;
		}
	}
	else if(personality.localeCompare("hogar") == 0){
		switch (genre){
			case 'h':
			/*gruñon*/window.open("https://animalcrossing.fandom.com/es/wiki/Categor%C3%ADa:Gru%C3%B1%C3%B3n");
			break;
			case 'm':
			/*dulce*/window.open("https://animalcrossing.fandom.com/es/wiki/Categor%C3%ADa:Dulce");
			break;
			case 'o':
			random = Math.random();
			if(random < 0.49)
				window.open("https://animalcrossing.fandom.com/es/wiki/Categor%C3%ADa:Gru%C3%B1%C3%B3n");
			else
				window.open("https://animalcrossing.fandom.com/es/wiki/Categor%C3%ADa:Dulce");
			break;
		}
	}
	else if(personality.localeCompare("sencillo") == 0){
			switch (genre){
			case 'h':
			window.open("https://animalcrossing.fandom.com/es/wiki/Categor%C3%ADa:Perezoso");
			break;
			case 'm':
			/*normal*/window.open("https://animalcrossing.fandom.com/es/wiki/Categor%C3%ADa:Normal");
			break;
			case 'o':
			random = Math.random();
			if(random < 0.49)
				window.open("https://animalcrossing.fandom.com/es/wiki/Categor%C3%ADa:Perezoso");
			else
				window.open("https://animalcrossing.fandom.com/es/wiki/Categor%C3%ADa:Normal");
			break;
		}
	}

	return true;
}