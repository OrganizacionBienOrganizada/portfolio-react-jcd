import { Skill } from "./Skill/Skill"

export const Skills = () => {
	return (
		<aside id="Skills">
			Habilidades y resultados
			<ul>
				<label>ICFES</label>
				<Skill name="Lectura crítica" max="100" value="54"/>
				<Skill name="Matemáticas" max="100" value="61"/>
				<Skill name="Sociales y Ciudadanas" max="100" value="62"/>
				<Skill name="Ciencias Naturales" max="100" value="66"/>
				<Skill name="Inglés" max="100" value="83"/>
				<label>EF SET</label>
				<Skill name="EF SET" max="100" value="64"/>
				<Skill name="Reading" max="100" value="75"/>
				<Skill name="Listening" max="100" value="61"/>
				<Skill name="Writing" max="100" value="59"/>
				<Skill name="Speaking" max="100" value="60"/>
			</ul>
		</aside>
	)
}