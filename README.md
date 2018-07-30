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
react-native run-android *dont use it
react-native start *use it

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


https://rallycoding.herokuapp.com/api/music_albuns

//Remote Debugger
http://localhost:8081/debugger-ui

**props
	>Usado apenas para fazer comunicação entre componentes pai e filho.

**state
	>Plain object usado em "class" que gravam e respondem a eventos disparados
	>Usado para atualizar o component 
	>Deve ser usado apenas com 'setState': this.setState(<data>);

**props.children
	Utilizado para receber o q foi passado pelo componente pai entre as tags do elemento filho

**FlexBox:
	justifyContent:
		->flex-start
		->flex-end
		->center
		->space-between
		->space-around
	flexDirection:
		->column(default)
		->row

**Component 
	*<Image />
		->precisa ser dimensionado para aparecer
	*<View />
	*<Text />
	*<ScrollView />
	*<TouchableOpacity />