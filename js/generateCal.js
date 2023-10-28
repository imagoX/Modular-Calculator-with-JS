import generateElement from "./generateElement.js";

const container = generateElement("div",
    { "class": "container" },
    generateElement("form",
        { "action": "" , "name":"calculator"}
        ,
        generateElement(
            "div",
            { "class": "display"},
            generateElement(
                "input",
                {"type" : "text", "name" : "nResult", "id" : "result", "placeholder" : "0"},
            )
        ),
        generateElement(
            "div",
            { "class": "row" },
            generateElement("h3", null, "calculator")

        ),
        generateElement(
            "div",
            { "class": "row" },
            generateElement(
                "input",
                {"type":"button", "value" : "AC", "name" : "nu", "class": "red", "onclick":"reset();"}
            ),
            generateElement(
                "input",
                {"type":"button", "value" : "DEL", "name" : "back", "class": "red", "onclick":"calculator.nResult.value = calculator.nResult.value.substr(0,calculator.nResult.value.length-1)"}
            )

        ),
        generateElement(
            "div",
            { "class": "row" },
            generateElement(
                "input",
                {"type":"button", "value" : "7", "name" : "c7", "onclick":"add(c7.value);"}
            ),
            generateElement(
                "input",
                {"type":"button", "value" : "8", "name" : "c8", "onclick":"add(c8.value);"}
            ),
            generateElement(
                "input",
                {"type":"button", "value" : "9", "name" : "c9", "onclick":"add(c9.value);"}
            ),
            generateElement(
                "input",
                {"type":"button", "value" : "+", "name" : "inc", "onclick":"add(inc.value);"}
            ),
            generateElement(
                "input",
                {"type":"button", "value" : "|x|", "name" : "abs", "onclick":"Mathcalc(name)"}
            ),
            generateElement(
                "input",
                {"type":"button", "value" : "ceil", "name" : "ceil", "onclick":"Mathcalc(name)"}
            )


        ),
        generateElement(
            "div",
            { "class": "row" },
            generateElement(
                "input",
                {"type":"button", "value" : "4", "name" : "c4", "onclick":"add(c4.value);"}
            ),
            generateElement(
                "input",
                {"type":"button", "value" : "5", "name" : "c5", "onclick":"add(c5.value);"}
            ),
            generateElement(
                "input",
                {"type":"button", "value" : "6", "name" : "c6", "onclick":"add(c6.value);"}
            ),
            generateElement(
                "input",
                {"type":"button", "value" : "-", "name" : "mi", "onclick":"add(mi.value);"}
            ),
            generateElement(
                "input",
                {"type":"button", "value" : "sqrt", "name" : "sqrt", "onclick":"Mathcalc(name)"}
            ),
            generateElement(
                "input",
                {"type":"button", "value" : "[x]", "name" : "floor", "onclick":"Mathcalc(name)"}
            )
        ),
        generateElement(
            "div",
            {"class" : "row"},
            generateElement(
                "input",
                {"type":"button", "value" : "1", "name" : "c1", "onclick":"add(c1.value);"}
            ),
            generateElement(
                "input",
                {"type":"button", "value" : "2", "name" : "c2", "onclick":"add(c2.value);"}
            ),
            generateElement(
                "input",
                {"type":"button", "value" : "3", "name" : "c3", "onclick":"add(c3.value);"}
            ),
            generateElement(
                "input",
                {"type":"button", "value" : "*", "name" : "mu", "onclick":"add(mu.value);"}
            ),
            generateElement(
                "input",
                {"type":"button", "value" : "round", "name" : "round", "onclick":"Mathcalc(name)"}
            ),

        ),
        generateElement(
            "div",
            {"class" : "row"},
            generateElement(
                "input",
                {"type":"button", "value" : "0", "name" : "c0", "onclick":"add(c7.value);"}
            ),
            generateElement(
                "input",
                {"type":"button", "value" : ".", "name" : "point", "onclick":"add(point.value);"}
            ),
            generateElement(
                "input",
                {"type":"button", "value" : "/", "name" : "di", "onclick":"add(di.value);"}
            ),
            generateElement(
                "input",
                {"type":"button", "value" : "=", "name" : "eq", "class":"green", "onclick":"final();"}
            ),

        ),
    ),
)

export default container;