// Copyright 2015 University of Szeged
// Copyright 2015 Samsung Electronics Co., Ltd.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

assert ("abcabc".replace("bc", ":") === "a:abc");
assert ("hello".replace("", ":") === ":hello");

assert ("xabcxabcx".replace (/abc/g, "[$&][$`][$']") === "x[abc][x][xabcx]x[abc][xabcx][x]x");
assert ("abc".replace (/a(b)c|d()/, "[$1][$01][$2][$02][$99][$123][$012]") === "[b][b][][][][3][b2]");
assert ("abc".replace("abc", "$x$$5$0$00$" === "$x$5$0$00$"));

assert ("a true true story".replace(true) === "a undefined true story");
assert ("1234".replace(23, 32) === "1324");

assert ("abcabc".replace(/bc/, ":") === "a:abc");
assert ("axbcxx".replace(/x*/g, ":") === ":a::b:c::");

assert (String.prototype.replace.call (12321, /2/g, ".") === "1.3.1");

try
{
  String.prototype.replace.call (null, "u", ".");
  assert (false);
}
catch (e)
{
  assert (e instanceof TypeError);
}

assert ("98765".replace(76, function () { return {}; }) === "98[object Object]5");

function concat_arguments()
{
  var str = "";
  for (var i = 0; i < arguments.length; i++)
  {
    str += "[" + arguments[i] + "]";
  }
  return str;
}

assert ("abcdabcd".replace("cd", concat_arguments) === "ab[cd][2][abcdabcd]abcd");
assert ("abcdef".replace (/a((b)c)|d()/, concat_arguments) === "[abc][bc][b][undefined][0][abcdef]def");

try
{
  "x".replace("x", function() { throw "MyError"; });
  assert (false);
}
catch (e)
{
  assert (e === "MyError");
}

assert ("\ud801\udc00".replace("\ud801", "#") === "#\udc00");
assert ("\ud801\udc00".replace("\udc00", "#") === "\ud801#");
