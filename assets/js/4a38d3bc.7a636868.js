"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[357],{1156:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return r},metadata:function(){return s},toc:function(){return u},default:function(){return c}});var a=n(7462),i=n(3366),o=(n(7294),n(3905)),l=["components"],p={sidebar_position:1},r="Template - Day 1: Report Repair",s={unversionedId:"puzzles/template-day-1",id:"puzzles/template-day-1",isDocsHomePage:!1,title:"Template - Day 1: Report Repair",description:"by @adpi2",source:"@site/target/mdoc/puzzles/template-day-1.md",sourceDirName:"puzzles",slug:"/puzzles/template-day-1",permalink:"/scala-advent-of-code/puzzles/template-day-1",editUrl:"https://github.com/scalacenter/scala-advent-of-code/edit/main/website/target/mdoc/puzzles/template-day-1.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Setup",permalink:"/scala-advent-of-code/setup"}},u=[{value:"Puzzle description",id:"puzzle-description",children:[],level:2},{value:"Solution of Part 1",id:"solution-of-part-1",children:[{value:"About <code>Seq[Int]</code>",id:"about-seqint",children:[],level:3}],level:2},{value:"Solution of Part 2",id:"solution-of-part-2",children:[],level:2},{value:"Final solution",id:"final-solution",children:[],level:2}],d={toc:u};function c(e){var t=e.components,n=(0,i.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"template---day-1-report-repair"},"Template - Day 1: Report Repair"),(0,o.kt)("p",null,"by @adpi2"),(0,o.kt)("h2",{id:"puzzle-description"},"Puzzle description"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://adventofcode.com/2020/day/1"},"https://adventofcode.com/2020/day/1")),(0,o.kt)("p",null,"You must log in to get your input file."),(0,o.kt)("h2",{id:"solution-of-part-1"},"Solution of Part 1"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'@main def part1: Unit = \n  // read the input as a sequence of Int\n  val entries: Seq[Int] = Source.fromResource("input").getLines.map(_.toInt).toSeq\n  \n  // compute all the pairs of entries\n  val pairs: Seq[(Int, Int)] =\n    for \n      (x, i) <- entries.zipWithIndex\n      y <- entries.drop(i)\n    yield (x, y)\n  \n  // find the pair whose product is 2020\n  val solution = pairs.find((x, y) => x * y == 2020)\n\n  // print the solution\n  solution match\n    case Some((x, y)) => "The solution is ${x * y}"\n    case None => "No solution found"\n')),(0,o.kt)("h3",{id:"about-seqint"},"About ",(0,o.kt)("inlineCode",{parentName:"h3"},"Seq[Int]")),(0,o.kt)("p",null,"A value of type ",(0,o.kt)("inlineCode",{parentName:"p"},"Seq[Int]")," is a sequence of integers.\nFor instance it can be ",(0,o.kt)("inlineCode",{parentName:"p"},"Seq(156, 48, 674, 8481)")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"zipWithIndex")," is a method of  ",(0,o.kt)("inlineCode",{parentName:"p"},"Seq[Int]")," that associates each element with its index.\nIt returns a ",(0,o.kt)("inlineCode",{parentName:"p"},"Seq[(Int, Int)]")),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ Seq(156, 48, 674, 8481).zipWithIndex\nSeq((156, 0), (48, 1), (674, 2), (8481, 3))\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"drop(n: Int)")," is a method of ",(0,o.kt)("inlineCode",{parentName:"p"},"Seq[Int]")," that builds a new sequence of ",(0,o.kt)("inlineCode",{parentName:"p"},"Int")," by dropping ",(0,o.kt)("inlineCode",{parentName:"p"},"n")," elements from the left."),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ Seq(156, 48, 674, 8481).drop(2)\nSeq(674, 8481)\n")),(0,o.kt)("p",null,"We can build all the pairs of entries by iterating over all them twice.\nOn the second iteration we need to skip the entries that we already saw.\nWe can do so by dropping the first ",(0,o.kt)("inlineCode",{parentName:"p"},"i")," elements where ",(0,o.kt)("inlineCode",{parentName:"p"},"i")," is the index of the first iteration."),(0,o.kt)("p",null,"Hence we have:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"val pairs: Seq[(Int, Int)] =\n  for \n    (x, i) <- entries.zipWithIndex\n    y <- entries.drop(i)\n  yield (x, y)\n")),(0,o.kt)("h2",{id:"solution-of-part-2"},"Solution of Part 2"),(0,o.kt)("p",null,"In the second part we need to compute all the 3-tuples of elements instead of the pair."),(0,o.kt)("p",null,"We can use a similar approach:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"val tuples: Seq[(Int, Int, Int)] =\n  for \n    (x, i) <- entries.zipWithIndex\n    (y, j) <- entries.drop(i)\n    z <- entries.drop(i + j)\n  yield (x, y, z)\n")),(0,o.kt)("h2",{id:"final-solution"},"Final solution"),(0,o.kt)("p",null,"Is it possible to generalize the code that computes all the tuples of size ",(0,o.kt)("inlineCode",{parentName:"p"},"n"),"?"),(0,o.kt)("p",null,"Yes it is, and it is already implemented in the ",(0,o.kt)("inlineCode",{parentName:"p"},"scala-library")," under the method of ",(0,o.kt)("inlineCode",{parentName:"p"},"Seq[Int]")," called ",(0,o.kt)("inlineCode",{parentName:"p"},"combinations"),".\nWe can use this method to simplify our code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'// using scala 3.0.2\n// using resource "./"\n\npackage day1\n\nimport scala.io.Source\n\nval entries = Source.fromResource("input").getLines.map(_.toInt).toSeq\n\n@main def part1: Unit =\n  computeAnswer(2) match\n    case Some(answer) => println(s"The answer of part 1 is $answer")\n    case None         => println("No solution found")\n\n@main def part2: Unit =\n  computeAnswer(3) match\n    case Some(answer) => println(s"The answer of part 2 is $answer")\n    case None         => println("No solution found")\n\ndef computeAnswer(n: Int): Option[Int] =\n  val combinations = entries.combinations(n)\n  combinations.find(_.sum == 2020).map(_.product)\n')),(0,o.kt)("p",null,"The gist of this solution is ",(0,o.kt)("a",{parentName:"p",href:"https://gist.github.com/adpi2/9eaf82c559a7a24ab658ea7844cf84e3"},"https://gist.github.com/adpi2/9eaf82c559a7a24ab658ea7844cf84e3"),".\nYou can clone and run it with:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ git clone https://gist.github.com/adpi2/9eaf82c559a7a24ab658ea7844cf84e3 day-1\n\n$ scala-cli . -M day1.part1\nThe answer of part 1 is 970816\n\n$ scala-cli . -M day1.part2\nThe answer of part 2 is 96047280\n")),(0,o.kt)("p",null,"Replace the ",(0,o.kt)("inlineCode",{parentName:"p"},"day-1/input")," file with your own ",(0,o.kt)("inlineCode",{parentName:"p"},"input")," from ",(0,o.kt)("a",{parentName:"p",href:"https://adventofcode.com/2020/day/1"},"adventofcode.com")," to get your own solution.  "),(0,o.kt)("h1",{id:"solutions-from-the-community"},"Solutions from the community"),(0,o.kt)("p",null,"Share your solution with the Scala community."),(0,o.kt)("p",null,"Create a gist on ... and open a pull request in ...."))}c.isMDXComponent=!0}}]);