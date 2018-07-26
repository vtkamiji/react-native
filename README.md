install java sdk
install phyton
install nodejs
install android device

update nodejs(optional)
	nvm ls
	nvm install <version>

install react-native-cli
	npm install -g react-native-cli
create project
	react-native init <project_name>

On Android Studio -> open existing project -> select android gaddle above project folder
Create Virtual Device -> Tools -> AVD Manager -> Nexus 5(5 pol.) -> build.gaddle(find Android API version) -> donwload

Setar JAVA_HOME
Setar Path >> C:\Users\<Computer>\AppData\Local\Android\sdk\plataform-tools (mudar)

cd >> albums
react-native run-android

ESLint - sublime
npm install -g eslint
install package control for sublime
npm install --save-dev eslint-config-rallycoding
criar arquivo ".eslintrc" no folder do projeto e escrever o conteudo:
	{
		"extends": "rallycoding"
	}
Sublime >> CRTL+SHIFT+P : Package Control: Install Package >> sublimelinter
Sublime >> CRTL+SHIFT+P : Package Control: Install Package >> sublimelinter-eslint
Sublime >> CRTL+SHIFT+P : Package Control: Install Package >> Babel
	--> View >> Syntax >> Open All current ... >> Babel >> Babel javascript

npm install --save-dev @babel/plugin-syntax-class-properties



