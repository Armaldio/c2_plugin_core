function GetPluginSettings()
{
	return {
		"name":	"Plugin Core Example",
		"id": "plugin_with_core",
		"version":		"1.0",
		"description": "aaa",
		"author": "Armaldio",
		"help url": "",
		"category": "Common",
		"type": "object",
		"rotatable": false,
		"flags": pf_singleglobal
	};
}

AddStringParam("String", "The string you want to alert");
AddAction(0, af_none, "Alert", "Message", "Alert {0}", "Alert a message.", "ShowAlert");

ACESDone();

var property_list = [
];

function CreateIDEObjectType()
{
	return new IDEObjectType();
}

function IDEObjectType()
{
	assert2(this instanceof arguments.callee,"Constructor called as a function");
}

IDEObjectType.prototype.CreateInstance = function(instance)
{
	return new IDEInstance(instance, this);
}

function IDEInstance(instance, type)
{
	assert2(this instanceof arguments.callee,"Constructor called as a function");
	
	this.instance = instance;
	this.type = type;
	
	this.properties = {};
	
	for(property in property_list)
		this.properties[property.name] = property.initial_value;
}

IDEInstance.prototype.OnCreate = function()
{
}

IDEInstance.prototype.OnPropertyChanged = function(property_name)
{
}

IDEInstance.prototype.Draw = function(renderer)
{
}

IDEInstance.prototype.OnRendererReleased = function()
{
}